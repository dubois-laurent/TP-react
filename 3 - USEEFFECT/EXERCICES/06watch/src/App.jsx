

function Clock() {
    const [time, setTime] = React.useState(new Date());
    const [stoppedTimer, setStoppedTimer] = React.useState(new Date());

    React.useEffect(() => {
        const intervalTimer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalTimer)
            setStoppedTimer(time)
        }
    }, []);

    return (
        <div>
            <h2>{time.toLocaleTimeString()}</h2>
            <h2>{stoppedTimer.toLocaleTimeString()}</h2>
        </div>
    );
}

function App() {
    const [mounted, setMounted] = React.useState(true)
    return (
        <div>
            <button onClick={ () => setMounted(!mounted)}>ACTIVER L'HORLOGE
            </button>
            <Clock />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
        <App />
);