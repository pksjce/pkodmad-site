import React from "react";
import Header from "../components/header";
import Paragraph from "../components/paragraph";
import styled from "styled-components";
import Modal from 'react-modal';

const CatContainer = styled.div`
    display: grid;
    min-height: 600px;
    grid-column-gap: 10px;
    grid-auto-rows: minmax(1fr, 200px);
    grid-template-columns: repeat(4, minmax(auto, 1fr));
    align-items: stretch;
    justify-items: center;
`

const ImageSpan1 = styled.div`
    grid-row: span 1
`

const ImageSpan2 = styled.div`
    grid-row: span 2;
`

const Image = styled.img`
    margin-bottom: 0;
    cursor: pointer;
    &:hover {
        border: 2px solid pink
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
                            return <ImageSpan2 onClick={() => this.setModal(imgObject, text)}><Image src={imgObject.node.resolutions.src} /></ImageSpan2>
                        }
                        return <ImageSpan1 onClick={() => this.setModal(imgObject, text)}><Image src={imgObject.node.resolutions.src} /></ImageSpan1>
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
