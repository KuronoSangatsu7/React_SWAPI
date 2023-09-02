export const Header = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="text-center text-amber-400 text-6xl tracking-widest italic p-6 mb-6 font-semibold">
            {children}
        </h1>
    );
};
