export const Visits = () => {
    const visits = localStorage.getItem("visits") || 0;

    return <div>{visits}</div>;
};
