import React from 'react'

export const Footer = () => {
  return (
    <div class="bg-dark font-weight-bold text-light">
        <div class="container">
            <div class="row mt-3 pt-3 d-flex justify-content-around">
                <div class="col">
                    <h3 style={{color: "aquamarine"}}>See Best Movie Info</h3>
                    <ul style={{fontSize:"1.4rem"}}>
                        <li>Avenger</li>
                        <li>Firest Gump</li>
                        <li>Spiderman</li>
                    </ul>
                </div>
                <div class="col">
                <h3 style={{color: "aquamarine"}}>See Worst Movie Info</h3>
                <ul style={{fontSize:"1.4rem"}}>
                        <li>Are you there?</li>
                        <li>Where are you?</li>
                        <li>I am here?</li>
                    </ul>
                </div>
                <div class="col">
                <h3 style={{color: "aquamarine"}}>See Movie Review</h3>
                <ul style={{fontSize:"1.4rem"}}>
                        <li>Titanic</li>
                        <li>X-men</li>
                        <li>Spiderman</li>
                    </ul>
                </div>
            </div>
            <div class='row bg-dark text-center'>
                <p class="text-center text-secondary" style={{fontSize:"1.4rem"}} >&copy; Copyright: David Mukhiya </p>
            </div>
        </div>
    </div>
  )
}
