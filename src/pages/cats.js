import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Modal from "react-responsive-modal";

const CatContainer = styled.div`
  display: grid;
  min-height: 250px;
  grid-column-gap: 10px;
  align-items: stretch;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
`;
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
  border-radius: 8px;
  border: 1px solid #0000006b;
  opacity: 0.85;
  background-color: black;
  &:hover {
    box-shadow: 0px 1px 4px #0000006b;
    opacity: 1;
  }
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class CatPage extends React.Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
      modalImg: {},
      text: ""
    };
    this.setModal = this.setModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  setModal(imgObject, text) {
    this.setState({
      openModal: true,
      modalImg: imgObject,
      text
    });
  }
  closeModal(imgObject) {
    this.setState({
      openModal: false,
      modalImg: {},
      text: ""
    });
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
            const imgObject = sharpImages.filter(shrpImg => {
              const shrpImageId = shrpImg.node.id;
              return shrpImageId.indexOf(`${id}.jpg`) > 0;
            })[0];
            return (
              <div onClick={() => this.setModal(imgObject, text)}>
                <div>Add image</div>
              </div>
            );
          })}
        </CatContainer>
        <Modal
          open={this.state.openModal}
          onClose={this.closeModal}
          showCloseIcon={false}
          little
        >
          {this.state.modalImg.node && (
            <CenterWrapper>
              <img
                style={{
                  maxHeight: "650px"
                }}
                src={this.state.modalImg.node.original.src}
              />
            </CenterWrapper>
          )}
          <CenterWrapper>{this.state.text}</CenterWrapper>
        </Modal>
      </Paragraph>
    ];
  }
}

export default CatPage;

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
`;
