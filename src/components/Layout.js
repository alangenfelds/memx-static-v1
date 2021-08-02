import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

import useSiteMetadata from "../hooks/useSiteMetadata"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  const [isOpen, setIsOpen] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    if (menuOpened) {
      document.body.style.overflowY = "hidden"
      document.getElementById("main-wrapper").style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "unset"
      document.getElementById("main-wrapper").style.overflowY = "unset"
    }
  }, [menuOpened])

  const handleResize = e => {
    const innerWidth = e.target.innerWidth
    if (innerWidth >= 1024) {
      setMenuOpened(false)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <main className="wrapper" id="main-wrapper">
        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setMenuOpened={setMenuOpened}
        />
        {children}
      </main>
    </div>
  )
}

export default Layout
