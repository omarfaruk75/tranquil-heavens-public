import { useRouteError } from "react-router-dom";


const NotFound = () => {
    const error = useRouteError();
    return (
        <div className="text-center">
            <h1 className="text-4xl">404</h1>
            <h2 className="text-3xl">Page Not Found</h2>

            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default NotFound;