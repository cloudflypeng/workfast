import { Link } from "react-router-dom"
const Snip = (props) => {
  return (
    <div className="h-full block flex py-40">
      <div className="w-1/2 flex justify-center flex-row">
        <div className="mx-40 flex flex-col justify-around">
          <div className="text-6xl">
            创建<span className="importtext">代码片段</span>
            让 开发更快速
          </div>

          <button
            className="rounded-full block h-14 w-44 block basecolor text-white">
            <Link to="/snip">给俺康康</Link>
          </button>
        </div>

      </div>
      <div className="w-1/2 flex items-center">
        <img className="mr-20 flex-grow-0" alt="codeSnip" src="https://qc2vvn.file.qingfuwucdn.com/file/6e1f0f140a7d31ea_1647586731486.png" />
      </div>

    </div >
  )
}

export default Snip