"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          // id: 1,
          authority_id: 1,
          code: "Bungalows or Detached Houses Handbook",
          clause: "NA",
          content:
            "What are the minimum plot sizes and setback requirements for bungalows under the URA guidelines?",
          upvote: 0,
          user_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 2,
          authority_id: 1,
          code: "Bungalows or Detached Houses Handbook",
          clause: "NA",
          content:
            "Are there any specific requirements or recommendations for landscaping and outdoor areas in bungalows under the handbook?",
          upvote: 0,
          user_id: "22252fc1-ca47-4e93-b26c-d52ba74e26c6",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 3,
          authority_id: 1,
          code: "Bungalows or Detached Houses Handbook",
          clause: "NA",
          content:
            "How does the handbook address issues related to the preservation and conservation of historic or heritage bungalows in Singapore?",
          upvote: 0,
          user_id: "ab27eb29-bfa5-41f8-adbd-f422587936bd",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 4,
          authority_id: 1,
          code: "Bungalows or Detached Houses Handbook",
          clause: "NA",
          content:
            "Are there any ongoing efforts to update or revise the URA Residential Handbook for Bungalows, and if so, what changes are being considered?",
          upvote: 0,
          user_id: "73824e09-b626-4eb1-86b0-7ca5bd5fe159",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 5,
          authority_id: 1,
          code: "Bungalows or Detached Houses Handbook",
          clause: "NA",
          content:
            "What are the envelope control guidelines for bungalows and what is the maximum building height bungalows can have?",
          upvote: 0,
          user_id: "b17dfe4b-09ec-48f7-8cec-f1f652ca34d7",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 6,
          authority_id: 1,
          code: "Business 2 (Industrial) Handbook",
          clause: "NA",
          content:
            "What is the URA Non-Residential Handbook for Business 2 (Industrial), and what types of properties does it apply to?",
          upvote: 0,
          user_id: "f530c66e-8028-4fd5-ab1a-045d5068576d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 7,
          authority_id: 1,
          code: "Business 2 (Industrial) Handbook",
          clause: "NA",
          content:
            "How does the handbook address issues related to environmental sustainability and energy efficiency in the context of industrial properties?",
          upvote: 0,
          user_id: "200adddd-f6dc-4219-afa8-b0e45021e33a",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 8,
          authority_id: 1,
          code: "Business 2 (Industrial) Handbook",
          clause: "NA",
          content:
            "How does the handbook address issues related to the provision of amenities and services for workers in industrial properties, such as canteens or recreational areas?",
          upvote: 0,
          user_id: "bd7442fb-53b7-4606-a54e-66b2182f4563",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 9,
          authority_id: 1,
          code: "Business 2 (Industrial) Handbook",
          clause: "NA",
          content:
            "Are there any exceptions or waivers to the setback guidelines for industrial properties?",
          upvote: 0,
          user_id: "45e0353e-54d1-42a9-a9a0-c93380680b43",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 10,
          authority_id: 1,
          code: "Business 2 (Industrial) Handbook",
          clause: "NA",
          content:
            "How do the setback guidelines differ for different types of industrial properties, such as factories or warehouses?",
          upvote: 0,
          user_id: "904c2801-5ab9-492a-b61c-c3cf0c18ca92",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 11,
          authority_id: 1,
          code: "Sports and Recreation Handbook",
          clause: "NA",
          content:
            "What is the URA Non-Residential Handbook for Sports and Recreation, and what types of properties does it apply to?",
          upvote: 0,
          user_id: "f1d20859-618f-4ad0-9bcd-0c3f0fa6348e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 12,
          authority_id: 1,
          code: "Sports and Recreation Handbook",
          clause: "NA",
          content:
            "What are the minimum plot sizes and setback requirements for sports and recreational properties under the URA guidelines?",
          upvote: 0,
          user_id: "fb1bbcfd-548d-4ddc-a0a1-0624d6424d3f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 13,
          authority_id: 1,
          code: "Sports and Recreation Handbook",
          clause: "NA",
          content:
            "How does the handbook address issues related to the provision of amenities and services for users of sports and recreational facilities, such as changing rooms or equipment storage?",
          upvote: 0,
          user_id: "74a15016-9dd0-4bf7-bc63-96a1181fc254",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 14,
          authority_id: 1,
          code: "Sports and Recreation Handbook",
          clause: "NA",
          content:
            "How does the handbook guide the design and construction of sports and recreational facilities in Singapore?",
          upvote: 0,
          user_id: "b41c02f5-cae6-47fb-96de-08a87011bc85",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 15,
          authority_id: 1,
          code: "Sports and Recreation Handbook",
          clause: "NA",
          content:
            "Are there any specific zoning or land-use restrictions that apply to sports and recreational properties under the URA guidelines?",
          upvote: 0,
          user_id: "74940d25-c418-4c34-9915-a9ad1452aabb",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 16,
          authority_id: 1,
          code: "Gross Floor Area Handbook",
          clause: "NA",
          content:
            "What is the URA GFA (Gross Floor Area) handbook, and what types of properties does it apply to?",
          upvote: 0,
          user_id: "1a7c0323-7b46-4c5d-ad94-776ad5fc2841",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 17,
          authority_id: 1,
          code: "Gross Floor Area Handbook",
          clause: "NA",
          content:
            "What are the different types of gross floor area, and how are they defined under the URA guidelines?",
          upvote: 0,
          user_id: "ecd79eeb-cf33-4c48-a0d3-3162a52b7ff1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 18,
          authority_id: 1,
          code: "Gross Floor Area Handbook",
          clause: "NA",
          content:
            "What are the maximum allowable gross floor area ratios (GFAR) for different types of properties under the URA guidelines?",
          upvote: 0,
          user_id: "adec7416-ee7b-48d2-9db7-d027edd39456",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 19,
          authority_id: 1,
          code: "Gross Floor Area Handbook",
          clause: "NA",
          content:
            "Are there any specific requirements or restrictions related to the allocation of gross floor area to different uses, such as residential or commercial?",
          upvote: 0,
          user_id: "b50ea9f4-07f2-4ed6-a35a-c6ccbf4089be",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 20,
          authority_id: 1,
          code: "Gross Floor Area Handbook",
          clause: "NA",
          content:
            "How does the URA GFA handbook impact the overall density and urban form of Singapore?",
          upvote: 0,
          user_id: "19fc8b42-618d-4051-8535-6ce93add022a",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 21,
          authority_id: 2,
          code: "Approved Document - Acceptable Solutions",
          clause: "C.3",
          content:
            "What is the difference between headroom clearance and ceiling height?",
          upvote: 0,
          user_id: "1cd38b82-154e-4b21-bdef-692dcdba69e4",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 22,
          authority_id: 2,
          code: "Approved Document - Acceptable Solutions",
          clause: "E.3.3",
          content:
            "How is the minimum width of the staircase defined when there are projections on both sides of the staircase?",
          upvote: 0,
          user_id: "79caf4dd-5f3a-4808-a0d2-ad4568edd986",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 23,
          authority_id: 2,
          code: "Approved Document - Acceptable Solutions",
          clause: "E.3.5",
          content:
            "At what intervals do we need to provide an intermediate landing for staircases?",
          upvote: 0,
          user_id: "ab27eb29-bfa5-41f8-adbd-f422587936bd",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 24,
          authority_id: 2,
          code: "Approved Document - Acceptable Solutions",
          clause: "E.3.6",
          content:
            "What is the maximum number of steps of a staircase that does not need handrails?",
          upvote: 0,
          user_id: "73824e09-b626-4eb1-86b0-7ca5bd5fe159",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 25,
          authority_id: 2,
          code: "Approved Document - Acceptable Solutions",
          clause: "E.3.7.2",
          content: "Do perforated steel staircases require nosing?",
          upvote: 0,
          user_id: "b17dfe4b-09ec-48f7-8cec-f1f652ca34d7",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 26,
          authority_id: 2,
          code: "Approved Document - Acceptable Solutions",
          clause: "G.2.3",
          content:
            "Is ventilation required for a store room in my development not exceeding an area of 6 square metres?",
          upvote: 0,
          user_id: "f530c66e-8028-4fd5-ab1a-045d5068576d",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 27,
          authority_id: 2,
          code: "Approved Document - Acceptable Solutions",
          clause: "H.3.4.3",
          content:
            "What is the maximum size of any opening or gap in a barrier for industrial buildings?",
          upvote: 0,
          user_id: "200adddd-f6dc-4219-afa8-b0e45021e33a",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 28,
          authority_id: 2,
          code: "Approved Document - Acceptable Solutions",
          clause: "I.3.3",
          content:
            "What is the maximum thermal transmittance limit for a roof of a non-conditioned building?",
          upvote: 0,
          user_id: "bd7442fb-53b7-4606-a54e-66b2182f4563",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 29,
          authority_id: 2,
          code: "Approved Document - Acceptable Solutions",
          clause: "K.3.2",
          content: "Must a CCTV be installed in a lift?",
          upvote: 0,
          user_id: "45e0353e-54d1-42a9-a9a0-c93380680b43",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 30,
          authority_id: 2,
          code: "Approved Document - Acceptable Solutions",
          clause: "O.2",
          content:
            "Do we need to install vehicular bollards at the main entrance of our development?",
          upvote: 0,
          user_id: "904c2801-5ab9-492a-b61c-c3cf0c18ca92",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 31,
          authority_id: 2,
          code: "Code on Accessibility in the Built Environment 2019",
          clause: "2.1.2",
          content:
            "Is urinal for the ambulant disabled required for industrial developments?",
          upvote: 0,
          user_id: "f1d20859-618f-4ad0-9bcd-0c3f0fa6348e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 32,
          authority_id: 2,
          code: "Code on Accessibility in the Built Environment 2019",
          clause: "2.5",
          content:
            "Is the development's sub-station exempted from the provisions in the Code on Accessibility 2019?",
          upvote: 0,
          user_id: "fb1bbcfd-548d-4ddc-a0a1-0624d6424d3f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 33,
          authority_id: 2,
          code: "Code on Accessibility in the Built Environment 2019",
          clause: "3.3.1",
          content:
            "We have multiple alighting and boarding points for our development. Must all of them be sheltered?",
          upvote: 0,
          user_id: "74a15016-9dd0-4bf7-bc63-96a1181fc254",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 34,
          authority_id: 2,
          code: "Code on Accessibility in the Built Environment 2019",
          clause: "3.5.1",
          content:
            "What is the minimum number of accessible vehicle parking lots for any development?",
          upvote: 0,
          user_id: "b41c02f5-cae6-47fb-96de-08a87011bc85",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 35,
          authority_id: 2,
          code: "Code on Accessibility in the Built Environment 2019",
          clause: "4.2.4.3",
          content:
            "What is the maximum size of any obstruction attached to a wall in pedestrian areas?",
          upvote: 0,
          user_id: "74940d25-c418-4c34-9915-a9ad1452aabb",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 36,
          authority_id: 2,
          code: "Code on Accessibility in the Built Environment 2019",
          clause: "4.2.4.5",
          content:
            "What are the requirements for bollards at entrance to walkways?",
          upvote: 0,
          user_id: "1a7c0323-7b46-4c5d-ad94-776ad5fc2841",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 37,
          authority_id: 2,
          code: "Code on Accessibility in the Built Environment 2019",
          clause: "4.4.2",
          content: "What is the minimum clear opening of doorways?",
          upvote: 0,
          user_id: "ecd79eeb-cf33-4c48-a0d3-3162a52b7ff1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 38,
          authority_id: 2,
          code: "Code on Accessibility in the Built Environment 2019",
          clause: "4.4.8",
          content: "What kinds of door hardware are compliant?",
          upvote: 0,
          user_id: "adec7416-ee7b-48d2-9db7-d027edd39456",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 39,
          authority_id: 2,
          code: "Code on Accessibility in the Built Environment 2019",
          clause: "5.2",
          content:
            "What are the minimum dimensions for an accessible individual washroom?",
          upvote: 0,
          user_id: "0dd90cc1-0cf8-4a60-9b42-ac049d7fbb1c",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 40,
          authority_id: 2,
          code: "Code on Accessibility in the Built Environment 2019",
          clause: "5.6.3",
          content: "What are the required washroom accessories?",
          upvote: 0,
          user_id: "58bf2a16-c503-4cc1-9ad2-cdef6f79e8ea",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 41,
          authority_id: 3,
          code: "Fire Code 2018",
          clause: "2.2",
          content:
            "What are the types of means of escape required under the Fire Code 2018?",
          upvote: 0,
          user_id: "0a1c02d1-b4a1-4e2c-ad65-db36ad66d099",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 42,
          authority_id: 3,
          code: "Fire Code 2018",
          clause: "2.2.6",
          content:
            "What is the maximum travel distance for industrial developments?",
          upvote: 0,
          user_id: "0a1c02d1-b4a1-4e2c-ad65-db36ad66d099",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 43,
          authority_id: 3,
          code: "Fire Code 2018",
          clause: "2.2.7",
          content: "What is the minimum width of any exit access door?",
          upvote: 0,
          user_id: "fd53bcb5-da89-430e-986f-f77f9ab0bba1",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 44,
          authority_id: 3,
          code: "Fire Code 2018",
          clause: "2.2.9",
          content: "How do we measure the clear width of an exit staircase?",
          upvote: 0,
          user_id: "64fea059-7d74-426b-a853-75c25cccb96e",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 45,
          authority_id: 3,
          code: "Fire Code 2018",
          clause: "2.2.10",
          content:
            "How many exits from rooms and spaces do we need to provide in general?",
          upvote: 0,
          user_id: "d0fd91f9-6013-4047-9269-c42705de1702",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 46,
          authority_id: 3,
          code: "Fire Code 2018",
          clause: "2.3.1",
          content: "What does the fire escape plan need to contain?",
          upvote: 0,
          user_id: "19fc8b42-618d-4051-8535-6ce93add022a",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 47,
          authority_id: 3,
          code: "Fire Code 2018",
          clause: "2.3.3",
          content:
            "What are the requirements for unprotected openings at exit staircases?",
          upvote: 0,
          user_id: "0804b366-c010-408b-a2e5-bb8054292604",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 48,
          authority_id: 3,
          code: "Fire Code 2018",
          clause: "2.3.12",
          content: "What are the requirements for remoteness of exits?",
          upvote: 0,
          user_id: "cb969818-4870-470d-a186-874c0da33126",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 49,
          authority_id: 3,
          code: "Fire Code 2018",
          clause: "2.4.2",
          content:
            "What are the requirements for siting of PWD holding points?",
          upvote: 0,
          user_id: "59c55c73-a7f7-4f7d-bf6a-f9146fb7d46f",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          // id: 50,
          authority_id: 3,
          code: "Fire Code 2018",
          clause: "6.1.2",
          content:
            "What are the requirements for fire extinguisher provisions?",
          upvote: 0,
          user_id: "1cd38b82-154e-4b21-bdef-692dcdba69e4",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
