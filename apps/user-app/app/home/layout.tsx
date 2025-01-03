import { Appbar } from "@repo/ui/appbar"
import { Searchbar } from "@repo/ui/searchbar"
export default function Layout({children}:{children: React.ReactNode}):JSX.Element{
    return(
        <div>
            <Appbar/>
            <div className="flex justify-center mt-0 pb-4 px-4">
                <Searchbar placeholder="Search Foods,Drinks,Thali"/>
            </div>
            {children}
        </div>
    )
}