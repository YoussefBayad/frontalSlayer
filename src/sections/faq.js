/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-heading";
import Accordion from "components/accordion/accordion";

const faqs = [
  {
    title: "What is Impeerforyou?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
  {
    title: "Who will be helping me?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
  {
    title: "Can Impeerforyou substitute for traditional face-to-face therapy?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
  {
    title: "Is Impeerforyou right for me?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
  {
    title: "How is my privacy protected?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
  {
    title: "How can I be sure that this is an effective form of therapy?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
  {
    title: "When was Impeerforyou established and why?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
  {
    title: "Lorem ipsum dolor sit amet?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
  {
    title: "Lorem ipsum dolor sit amet?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
  {
    title: "Lorem ipsum dolor sit amet?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
  {
    title: "Lorem ipsum dolor sit amet?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
  {
    title: "Lorem ipsum dolor sit amet?",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
        eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
        bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
        tincidunt laoreet ex,
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        {/* <SectionHeader
          title="Do you have any quesiton"
          description="Our support team ready to help you, please contact with them"
        /> */}
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}
