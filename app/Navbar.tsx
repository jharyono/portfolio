import { navLinks } from "./config"

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>Joni Haryono</div>
      <div className="flex space-x-4">
        <ul className="flex space-x-4">
          {navLinks.map((link, index) => (
            <li key={index}>{link.name}</li>
          ))}
        </ul>
        <div>Resume</div>
      </div>
    </div>
  )
}

export default Navbar
