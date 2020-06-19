import React from 'react'

import { Modal, Button } from 'react-bootstrap'


export default class Mod extends React.Component{


    constructor(props){
        super(props)

        this.onclick=this.onclick.bind(this)
        this.dismissHandler=this.dismissHandler.bind(this)

        this.state={
            isOpen:false
        }
    }


    onclick(){
        this.setState({
            isOpen:true
        })
    }

    dismissHandler(){
        this.setState({
            isOpen:false
        })
    }


    render(){

        return(
            <div>

            Hello
            <button className="btn btn-lg btn-primary btn-block" onClick={this.onclick} type="submit">Click</button>

            



        <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
       
        
            
            </div>
        )
    }

}