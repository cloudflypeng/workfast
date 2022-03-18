import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="w-screen fixed top-0 left-0 block flex items-center justify-center h-20">
      <Link to="/" className="block w-40">首页</Link>
      <Link to="/snip" className="w-40">关于我</Link>
    </header>
  )
}

export default Header