import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Modal from 'react-modal';

const CatContainer = styled.div`
    display: grid;
    min-height: 250px;
    grid-column-gap: 10px;
    align-items: stretch;
    justify-items: center;
    grid-template-columns: 1fr 1fr;

`
const Paragraph = styled.div`
  margin: auto;
  background: #0000006b;
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  color: white;

  @media (min-width: 420px) {
    margin: 10px 20%;
    padding: 20px;
  }
`;


const Image = styled.img`
    margin-bottom: 0;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 1px 10px white;
    }
`

class CatPage extends React.Component {
    constructor() {
        super();
        this.state = {
            openModal: false,
            modalImg: {},
            text: ""
        }
        this.setModal = this.setModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    setModal(imgObject, text) {
        this.setState({
            openModal: true,
            modalImg: imgObject,
            text
        })
    }
    closeModal(imgObject) {
        this.setState({
            openModal: false,
            modalImg: {},
            text: ""
        })
    }
    render() {
        const { data } = this.props;
        const imgData = data.allPostsJson.edges;
        const sharpImages = data.allImageSharp.edges;
        return [
            <Paragraph>
                <Header fontSize="3em">Cats I've met</Header>
                <CatContainer>
                    {imgData.map(({ node: { id, text } }) => {
                        const imgObject = sharpImages.filter((shrpImg) => {
                            const shrpImageId = shrpImg.node.id;
                            return shrpImageId.indexOf(`${id}.jpg`) > 0
                        })[0]
                        const r = imgObject.node.resolutions.aspectRatio;
                        if (r < 0.76) {
                            return <div onClick={() => this.setModal(imgObject, text)}><Image src={imgObject.node.resolutions.src} /></div>
                        }
                        return <div onClick={() => this.setModal(imgObject, text)}><Image src={imgObject.node.resolutions.src} /></div>
                    })}
                </CatContainer>
                <Modal isOpen={this.state.openModal} onRequestClose={this.closeModal}>

                    {this.state.modalImg.node && <img style={{ maxHeight: "650px" }} src={this.state.modalImg.node.original.src} />}
                    <div>{this.state.text}</div>
                </Modal>
            </Paragraph>
        ];
    }
}

export default CatPage

export const pageQuery = graphql`
    query allImages {
        allPostsJson {
            edges {
              node {
                id
              text
              }
            }
          }
          allImageSharp {
            edges {
              node {
                id
              original {
                width
                height
                src
              }
              resolutions {
                  aspectRatio
                  src
                  srcWebp
              }
              }
            }
          }
    }
`
