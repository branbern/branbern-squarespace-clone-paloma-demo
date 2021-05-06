import React from 'react'
import '../../Styles/Contact.scss'

const Contact = () =>  {

    return (
        <div className='contact'>
            <h3>If you have a project in mind, please complete the form below to send your enquiry.</h3>

            <form>
                <div className="form-group row justify-content-between">
                    <label className='label' for="FormControlInput1 col">Name *</label>
                    <div className="w-100"></div>   
                    <input type="email" className="col-5 form-control" id="FormControlInput1"/>
                    <input type="email" className="col-5 form-control" id="FormControlInput1"/>
                    <label className="label label-small col-5" for="FormControlInput1 col">First Name</label>
                    <label className="label label-small col-5" for="FormControlInput1 col">Last Name</label>
                </div>
                <div className="form-group row justify-content-between">
                    <div className="w-100"></div>   
                    <label className='label' for="FormControlInput1 col">Email *</label>
                    <div className="w-100"></div>   
                    <input type="email" className="col form-control" id="FormControlInput1"/>
                    <div className="w-100"></div>   
                    <label className='label' for="FormControlInput1 col">Business Name</label>
                    <div className="w-100"></div>   
                    <input type="email" className="col form-control" id="FormControlInput1"/>
                </div>

                <div class="form-group row justify-content-between">
                    <label for="FormControlTextarea1">Please describe your business. *</label>
                    <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group row justify-content-between">
                    <label for="FormControlTextarea1">Please describe your project. *</label>
                    <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group row justify-content-between">
                    <label for="FormControlTextarea1">Additional comments?</label>
                    <textarea class="form-control" id="FormControlTextarea1" rows="3"></textarea>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>

            <div className='final-info'>
                <div className="row">
                    <h3 className="col bold">Contact</h3>
                    <h3 className="col bold">Follow</h3>
                </div>
                <div className="row">
                    <div className="col">@email.com</div>
                    <div className="col"><u>Instagram</u></div>
                </div>
                <div className="row">
                    <div className="col">(555) 555-5555</div>
                    <div className="col"><u>Twitter</u></div>
                </div>
            </div>
        </div>
        )
}

export default Contact;
