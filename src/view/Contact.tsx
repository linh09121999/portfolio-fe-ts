import type React from "react";
import { useGlobal } from "../context/GlobalContext";

const Contacts:React.FC = () => {
    const { refs } = useGlobal()
    return(
        <section ref={refs['contact']} className="w-[1350px] mx-auto flex items-center justify-between">
        </section>
    )
}

export default Contacts