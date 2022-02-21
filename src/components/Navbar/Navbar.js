import "./Navbar.css";
import Logo from "../../images/LogoInstagram.png";
import Avatar from "../../images/Avatar.png";
import { IconContext } from "react-icons";
import { FaRegHeart } from "react-icons/fa";
import { FiPlusSquare, FiSearch, FiSend } from "react-icons/fi";
import { GrCompass } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";

export const Navbar = () => {
	return (
		<nav>
			<div className="navbar">
				<div className="logo-img">
					<img src={Logo} alt="Instagram logo" />
				</div>

				<div className="search">
					<IconContext.Provider
						value={{ size: "1.1em", color: "#919191" }}
					>
						<FiSearch />
					</IconContext.Provider>
					<input type="search" placeholder="Search" />
				</div>

				<div className="links">
					<IconContext.Provider value={{ size: "1.5em" }}>
						<AiFillHome />
						<FiSend />
						<FiPlusSquare />
						<GrCompass />
						<FaRegHeart />
					</IconContext.Provider>
					<div className="links-img">
						<img src={Avatar} alt="" />
					</div>
				</div>
			</div>
		</nav>
	);
};
