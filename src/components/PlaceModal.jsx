import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { Scrollbars } from "react-custom-scrollbars";

const PlaceModal = ({ selectedPlace, onClose }) => {
  const renderComments = () => {
    const comments = selectedPlace?.comment;
    if (!comments || Object.keys(comments).length === 0) {
      return null;
    }

    return (
      <div>
        <Text mt={4} fontWeight="bold" textDecoration="underline">
          ความคิดเห็น:
        </Text>
        <ul style={{ listStyleType: "none", paddingInlineStart: 0 }}>
          {Object.values(comments).map((comment, index) => (
            <li key={index} style={{ textIndent: "1em" }}>
              - {comment.comment_text} : โหวต {comment.vote}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Modal isOpen={!!selectedPlace} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai+Looped:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <ModalHeader
          fontFamily="Noto Sans Thai Looped"
          fontSize="xl"
          fontWeight="bold"
          textDecoration="underline"
        >
          {selectedPlace?.name}
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody fontFamily="Noto Sans Thai Looped">
          {/* ใช้ Scrollbars ครอบเนื้อหาที่ต้องการเลื่อน */}
          <Scrollbars style={{ width: "100%", height: "600px"}}>
            <div style={{ paddingRight: "16px" }}>
              <Image
                src={selectedPlace?.img}
                alt={selectedPlace?.name}
                objectFit="content"
              />

              <Text mt={4}>{selectedPlace?.descript}</Text>

              {renderComments()}

            </div>
            
          </Scrollbars>
        </ModalBody>
        <ModalFooter>
          <Button className="close" mr={3} onClick={onClose}>
            ปิด
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PlaceModal;
