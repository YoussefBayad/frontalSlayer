/** @jsx jsx */
import { jsx, Box, Container, Heading, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import Accordion from "components/secondAccordion/accordion";

import Image from "components/image";
import MentalHealth from "assets/images/mentalHealth.webp";

const initial = {
  title:
    "     Sadness, hopelessness, worthlessness. Anxiety, guilt, anger. Veterans returning from combat often experience waves of emotions in response to surviving traumatic events, such as being attacked or seeing others wounded or killed. Some veterans have trouble concentrating, relive traumatic events, or have thoughts of death or suicide. They may also use drugs, drink too much, or have trouble sleeping. For many veterans, these thoughts, feelings, and behaviors are reactions to difficult experiences that fade as they adjust to civilian life. But for some, they could be signs of serious mental health problems, dubbed “invisible wounds” in a landmark RAND study. RAND research shows that veterans who have been deployed are more likely than civilians to experience mental health conditions or cognitive injuries. In fact, one in five U.S. veterans of Iraq and Afghanistan experience PTSD or major depression.",

  contact: [
    {
      title: "New to VA? Apply for health care benefits.        ",
      contents: (
        <ul>
          <li>
            Getting started is simple.{" "}
            <a
              href="https://www.va.gov/health-care/apply/application/id-form"
              target="_SEJ"
              rel="noreferrer"
            >
              Create a free account online
            </a>{" "}
            to help ease your enrollment process. To prepare to apply for VA
            health care in person, by telephone, or by mail,{" "}
            <a
              href="https://www.va.gov/health-care/how-to-apply/"
              target="_SEJ"
              rel="noreferrer"
            >
              explore VA’s “How to Apply” page.
            </a>{" "}
          </li>
          <li>
            Not sure whether you are eligible for VA health care benefits? Read
            about{" "}
            <a
              href="https://www.va.gov/health-care/eligibility/"
              target="_SEJ"
              rel="noreferrer"
            >
              eligibility for VA health care.
            </a>{" "}
          </li>
          <li>
            Unsure of what kind of help you need?Call{" "}
            <a href="tel:1-877-222-8387"> 1-877-222-VETS</a> (1-877-222-8387) to
            find the right resources to meet your needs, Monday through Friday,
            8 a.m. to 8 p.m. ET. If you have hearing loss, call TTY:{" "}
            <a href="tel:1-800-877-8339"> 1-800-877-8339</a> .
          </li>
          <li>
            Veterans’ family members and caregivers can see whether they qualify
            for VA medical benefits as a spouse, surviving spouse, dependent
            child, or caregiver. Explore{" "}
            <a
              href="            https://www.va.gov/health-care/family-caregiver-benefits/
              "
              target="_SEJ"
              rel="noreferrer"
            >
              family and caregiver health benefits.{" "}
            </a>{" "}
          </li>
        </ul>
      ),
    },
    {
      title:
        "Already enrolled in VA and interested in mental health support? Schedule a mental health appointment.",
      contents: (
        <ul>
          <li>
            If you’re already enrolled and using VA health care, the fastest way
            to schedule VA appointments is to call the VA facility where you
            want to receive care.
          </li>
          <li>
            With{" "}
            <a
              href="https://www.va.gov/health-care/schedule-view-va-appointments/"
              target="_SEJ"
              rel="noreferrer"
            >
              VA Appointments tools,
            </a>{" "}
            you can schedule some VA health care appointments online, view
            details about upcoming appointments, and organize your health care
            calendar.
          </li>

          <li>
            If you’re not using VA medical services, contact your nearest{" "}
            <a
              href="https://www.maketheconnection.net/resources  "
              target="_SEJ"
              rel="noreferrer"
            >
              VA medical center or Vet Center.{" "}
            </a>{" "}
            to talk about your needs.
          </li>
        </ul>
      ),
    },
    {
      title:
        "What about other options at VA? VA offers a variety of tools and resources.   ",
      contents: (
        <ul>
          <li>
            The{" "}
            <a
              href="https://www.veterantraining.va.gov/"
              target="_SEJ"
              rel="noreferrer"
            >
              Veteran Training online self-help portal{" "}
            </a>{" "}
            for overcoming everyday challenges includes modules on managing
            anger, developing parenting and problem-solving skills, and more.
          </li>
          <li>
            <a
              href="https://mobile.va.gov/appstore/mental-health"
              target="_SEJ"
              rel="noreferrer"
            >
              Mental health apps for Veterans{" "}
            </a>{" "}
            cover a variety of topics, ranging from PTSD to anger management to
            quitting smoking.
          </li>
          <li>
            <a
              href="https://www.telehealth.va.gov/"
              target="_SEJ"
              rel="noreferrer"
            >
              VA TeleMental Health{" "}
            </a>{" "}
            connects you with a VA mental health provider through a computer or
            mobile device in your home or at your nearest VA health facility.
            You can learn more about this option from your local VA medical
            center.
          </li>
          <li>
            <a
              href="https://www.vetcenter.va.gov/"
              target="_SEJ"
              rel="noreferrer"
            >
              Vet Centers{" "}
            </a>{" "}
            are community-based counseling centers across the nation in all 50
            states and US territories that provide a wide range of social and
            psychological services, including professional readjustment
            counseling to eligible Veterans, Service members – including
            National Guard and Reserve components – and their families.
            Counselors and outreach staff, many of whom are Veterans themselves,
            are experienced and prepared to discuss the tragedies of war, loss,
            grief and transition after trauma. To learn more, visit the{" "}
            <a
              href="https://www.vetcenter.va.gov/"
              target="_SEJ"
              rel="noreferrer"
            >
              Vet Center website{" "}
            </a>{" "}
            or{" "}
            <a
              href="https://www.va.gov/find-locations/?facilityType=vet_center"
              target="_SEJ"
              rel="noreferrer"
            >
              {" "}
              find a nearest Vet Center.{" "}
            </a>{" "}
            Teams are also available 24/7 by phone at 1-877-927-8387.
          </li>
        </ul>
      ),
    },
    {
      title: "What about support beyond VA?      ",
      contents: (
        <div>
          There’s a whole community of support ready to help with whatever
          you’re going through. Use this tool to
          <a
            href="https://www.maketheconnection.net/resources/#samhsa-services"
            target="_SEJ"
            rel="noreferrer"
          >
            find resources near you.
          </a>{" "}
        </div>
      ),
    },
  ],
};

const HealthIssue = ({
  image = MentalHealth,
  title = "Veterans' Mental Health Issues",
  description = "The first step toward receiving mental health care is the realization that you may need help",
  overview = initial.title,
  symptoms,
  treatment,
  causes,
  whatToDo,
  contact = initial.contact,
  manage,
}) => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title={title}
          description={description}
        />
        <Box sx={styles.imageWrapper}>
          <Image src={image} className="image" alt="mental health" />
        </Box>

        <Box sx={styles.info}>
          <Heading as="h2">Overview:</Heading>
          <Text as="p" sx={styles.text}>
            {overview}
          </Text>
        </Box>
        {symptoms && (
          <Box sx={styles.info}>
            <Heading as="h2">Symptoms:</Heading>
            <Box sx={styles.accordionGroup}>
              <Accordion items={symptoms} />
            </Box>
          </Box>
        )}
        {causes && (
          <Box sx={styles.info}>
            <Heading as="h2">Causes:</Heading>
            <Box sx={styles.accordionGroup}>
              <Accordion items={causes} />
            </Box>
          </Box>
        )}
        {treatment && (
          <Box sx={styles.info}>
            <Heading as="h2">Treatment:</Heading>
            <Box sx={styles.accordionGroup}>
              <Accordion items={treatment} />
            </Box>
          </Box>
        )}
        {manage && (
          <Box sx={styles.info}>
            <Heading as="h2">
              What can I do to manage the effects of TBI?
            </Heading>

            <Box sx={styles.accordionGroup}>
              <Accordion items={manage} />
            </Box>
          </Box>
        )}
        {whatToDo && (
          <Box sx={styles.info}>
            <Heading as="h2">{whatToDo.title} :</Heading>
            <Box sx={styles.accordionGroup}>
              <Text as="p" sx={styles.text}>
                {whatToDo.content.header}
              </Text>
              {whatToDo.content.danger && (
                <Text as="p" sx={styles.danger}>
                  {whatToDo.content.danger}
                </Text>
              )}
              <Text as="p" sx={styles.text}>
                {whatToDo.content.footer}
              </Text>
            </Box>
          </Box>
        )}
        <Box sx={styles.info}>
          <Heading as="h2">Take the next step to connect with care:</Heading>
          <Box sx={styles.accordionGroup}>
            <Accordion items={initial.contact} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HealthIssue;

const styles = {
  heading: {
    maxWidth: "620px",
    mb: [5],
    mt: [7],
    h2: {
      letterSpacing: "heading",
    },
  },

  info: {
    my: ["40px", "60px"],

    h2: {
      mb: 3,
      fontSize: "28px",
    },
    a: {
      textDecoration: "none",
      color: "link",
    },
  },

  text: {
    fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: "textSecondary",
    ml: ["10px", "20px"],
    a: {
      textDecoration: "none",
      color: "link",
    },
  },
  danger: {
    fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: "danger",
    width: ["90%", "50%"],
    mx: "auto",
    textAlign: "center",
    p: 3,
    my: 4,
    borderRadius: "10px",
    border: "solid 1px #ff4136",
  },
  accordionGroup: {
    maxWidth: ["none", null, null, 600, "none"],
    ".accordion-item": {
      backgroundColor: "#F6F8FB",
      borderRadius: 10,
      p: [
        "20px 30px",
        "20px 30px",
        "30px 45px",
        "20px 25px 20px",
        "30px 45px",
        "20px 35px",
      ],
      "&.is-open": {
        backgroundColor: "#fff",
        boxShadow: "0px 9px 30px rgba(69, 88, 157, 0.08)",
      },
    },
  },
  explore: {
    textAlign: ["center"],
    mb: [6],
  },
  imageWrapper: {
    textAlign: "center",
    position: "relative",

    ".image": {
      maxWidth: ["100%", "100%", "100%", "100%", "85%", "80%"],
      backgroundColor: "#dceefb",
      borderRadius: "10px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
  },
};
