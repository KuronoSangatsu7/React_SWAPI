import { Header } from "../components/UI/header.component";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full bg-slate-800 flex flex-col items-center">
            <div className="w-full lg:w-3/5 p-6">
                <Header>Star Wars</Header>
                {children}
            </div>
        </div>
    );
};
