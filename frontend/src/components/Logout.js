import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default class Logout extends Component {
    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Body>
                        <p>You have been logged out. We're sorry to see you go! :(</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button href="/" variant="primary">Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}
