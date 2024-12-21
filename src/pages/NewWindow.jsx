import { useEffect } from "react";

const NewWindow = () => {
    useEffect(() => {
        document.title = "New Window";
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold">Welcome to the New Window Page</h1>
        </div>
    );
};

export default NewWindow;