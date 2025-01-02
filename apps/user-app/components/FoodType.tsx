import Image from "next/image"

export const FoodType = ({ name }: {
    name: string
}) => {
    return <div className=" grid grid-cols-3 gap-5 mx-6">
        <div>
            <Image src={"/foodType1.png"} width={150} height={120} alt="" />
            <p className="font-bold text-center">Starters</p>
        </div>
        <div>
            <Image src={"/foodType1.png"} width={150} height={120} alt="" />
            <p className="font-bold text-center">Starters</p>
        </div>
        <div>
            <Image src={"/foodType1.png"} width={150} height={120} alt="" />
            <p className="font-bold text-center">Starters</p>
        </div>
        <div>
            <Image src={"/foodType1.png"} width={150} height={120} alt="" />
            <p className="font-bold text-center">Starters</p>
        </div>
        <div>
            <Image src={"/foodType1.png"} width={150} height={120} alt="" />
            <p className="font-bold text-center">Starters</p>
        </div>
        <div>
            <Image src={"/foodType1.png"} width={150} height={120} alt="" />
            <p className="font-bold text-center">Starters</p>
        </div>

    </div>
}
// grid grid-cols-3 gap-5 mx-6