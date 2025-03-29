import React from 'react'
import { NavLink } from 'react-router-dom'
import LinkButton from './generic-components/LinkButton'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ColorPaletteComponent = () => {
  return (
    <>
    <section className="colorpalette-section bg-light">
    
      <div className="container">

        <div className="content bg-light">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <p>Paragraph</p>
          <span>Span</span>
          <div><a href="#" className="link active-link">Active link<FontAwesomeIcon icon={faChevronRight}/></a></div>
          <div><NavLink to="#" className="link">Navlink<FontAwesomeIcon icon={faChevronRight}/></NavLink></div>
          <div className="button-div">
            <LinkButton color={"theme"} url={"/contact"} text={"Contact"} icon={faChevronRight} />
            <LinkButton color={"secondary"} url={"/about"} text={"About"} icon={faChevronRight} />
            <LinkButton color={"transparent"} url={"/services"} text={"Services"} icon={faChevronRight} />
          </div>
        </div>

        <div className="content bg-dark">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <p>Paragraph</p>
          <span>Span</span>
          <div><a href="#" className="link active-link">Active link<FontAwesomeIcon icon={faChevronRight}/></a></div>
          <div><NavLink to="#" className="link">Navlink<FontAwesomeIcon icon={faChevronRight}/></NavLink></div>
          <div className="button-div">
            <LinkButton color={"theme"} url={"/contact"} text={"Contact"} icon={faChevronRight} />
            <LinkButton color={"secondary"} url={"/about"} text={"About"} icon={faChevronRight} />
            <LinkButton color={"transparent"} url={"/services"} text={"Services"} icon={faChevronRight} />
          </div>
        </div>

        <div className="content bg-coal">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <p>Paragraph</p>
          <span>Span</span>
          <div><a href="#" className="link active-link">Active link<FontAwesomeIcon icon={faChevronRight}/></a></div>
          <div><NavLink to="#" className="link">Navlink<FontAwesomeIcon icon={faChevronRight}/></NavLink></div>
          <div className="button-div">
            <LinkButton color={"theme"} url={"/contact"} text={"Contact"} icon={faChevronRight} />
            <LinkButton color={"secondary"} url={"/about"} text={"About"} icon={faChevronRight} />
            <LinkButton color={"transparent"} url={"/services"} text={"Services"} icon={faChevronRight} />
          </div>
        </div>

        <div className="content bg-mustard">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
          <p>Paragraph</p>
          <span>Span</span>
          <div><a href="#" className="link active-link">Active link<FontAwesomeIcon icon={faChevronRight}/></a></div>
          <div><NavLink to="#" className="link">Navlink<FontAwesomeIcon icon={faChevronRight}/></NavLink></div>
          <div className="button-div">
            <LinkButton color={"theme"} url={"/contact"} text={"Contact"} icon={faChevronRight} />
            <LinkButton color={"secondary"} url={"/about"} text={"About"} icon={faChevronRight} />
            <LinkButton color={"transparent"} url={"/services"} text={"Services"} icon={faChevronRight} />
          </div>
        </div>

      </div>

    </section>
    </>
  )
}

export default ColorPaletteComponent