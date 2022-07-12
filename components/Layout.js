import Head from "next/head"
import { Toolbar } from "./Toolbar"

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Toolbar />
      <div>
        {children}
      </div>
    </div>
  )
}
export default Layout