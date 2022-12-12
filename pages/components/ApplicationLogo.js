import Logo from "../../public/imtihan-default.webp";
import Image from "next/image";

const ApplicationLogo = props => (
    <Image src={Logo} placeholder="blur" {...props}/>
)

export default ApplicationLogo