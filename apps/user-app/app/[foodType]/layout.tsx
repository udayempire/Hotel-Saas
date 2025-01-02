import { Appbar } from "@repo/ui/appbar"
export default function Layout({children}:{children: React.ReactNode}):JSX.Element{
    return(
        <div>
            <Appbar/>
            {children}
        </div>
    )
}