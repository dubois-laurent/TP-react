// Fichier autonome compatible avec les builds UMD de React/ReactDOM chargés depuis index.html
// (Évite les imports/exports qui ne sont pas résolus par Babel standalone)
const { StrictMode, useState, useEffect } = React;
const { createRoot } = ReactDOM;

function Clock() {
    const [time, setTime] = useState(new Date());
    // mounted === running the live clock
    const [mounted, setMounted] = useState(false);
    // frozenTime holds a Date when the user captured the time
    const [frozenTime, setFrozenTime] = useState(null);

    const handleButton = () => {
        if (!mounted) {
            // 1st click: start live clock
            setMounted(true);
            setFrozenTime(null);
            setTime(new Date());
            return;
        }

        if (mounted && !frozenTime) {
            // 2nd click while running: capture frozen time (but keep live clock running)
            setFrozenTime(new Date());
            return;
        }

        // If already have a frozen time, clicking clears it
        if (frozenTime) {
            setFrozenTime(null);
            return;
        }
    };

    useEffect(() => {
        if (!mounted) return undefined;

        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [mounted]);

    const buttonLabel = !mounted ? 'Show Clock' : (frozenTime ? 'Clear frozen' : 'Freeze time');

    return (
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <div>
                <button onClick={handleButton}>{buttonLabel}</button>
            </div>
            <div>
                {mounted ? (
                    <div>
                        <h3>Live</h3>
                        <div>{time.toLocaleTimeString()}</div>
                    </div>
                ) : (
                    <div>
                        <h3>Horloge arrêtée</h3>
                    </div>
                )}
            </div>
            <div>
                {frozenTime && (
                    <div>
                        <h3>Figée</h3>
                        <div>{frozenTime.toLocaleTimeString()}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <Clock />
        </div>
    );
}