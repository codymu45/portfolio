import React from 'react';
import './style.css';

function Contact () {
  return (
      <form>
        <div class="form-group col-md-6 bg-white">
            <h3 class="card-title text-danger">Contact</h3>
            <hr />
            <label for="formGroupExampleInput">Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
        </div>
       
        <div class="form-group col-md-6 bg-white">
            <label for="formGroupExampleInput2">Email</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email" />
        </div>
        
        <div class="form-group col-md-6 bg-white">
          <label for="exampleFormControlTextarea1 bg-white">Message</label>
          <textarea class="form-control bg-white" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
  )
}

export default Contact;