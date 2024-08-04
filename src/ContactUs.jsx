import React from "react"
import './ContactUs.css'
import { useState } from "react"



export const ContactUs = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
     
      <div class="form-area">
        <div class="container">
          <div class="row single-form g-0">
            <div class="col-sm-12 col-lg-6">
              <div class="left">
                <h2>
                  <span>Contact us for</span> <br />
                  Business Enquies
                </h2>
              </div>
            </div>
            <div class="col-sm-12 col-lg-6">
              <div class="right">
                <i class="fa fa-caret-left"></i>
                <form>
                  <div class="mb-3">
                    <label class="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      class="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label  class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      class="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">
                      Message
                    </label>
                    <textarea
                      type="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      class="form-control"
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
