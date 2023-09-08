import React from 'react'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topbar__left">
                <div className="topbar__logo">
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <div className="topbar__brand">
                    <h1>Keyvar</h1>
                </div>
            </div>
            <div className="topbar__center">
                <div className="topbar__search">
                    <div className="topbar__search-icon"></div>
                    <input type="text" />
                    <div className="topbar__search-close-icon">
                        
                    </div>
                </div>
            </div>
            <div className="topbar__right">x</div>
        </div>
    </div>
  )
}
