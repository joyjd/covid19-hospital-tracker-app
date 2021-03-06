import React from "react";
import GoogleCredentials from "./../../utils/GoogleCredentials";

export const apiKey = "&key=" + GoogleCredentials.apiKey;
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const dummyData1 = {
  plus_code: {
    compound_code: "HFJ8+GQ Kolkata, West Bengal, India",
    global_code: "7MJCHFJ8+GQ",
  },
  results: [
    {
      address_components: [
        {
          long_name: "Action Area I",
          short_name: "AA I",
          types: ["political", "sublocality", "sublocality_level_3"],
        },
        {
          long_name: "Newtown",
          short_name: "Newtown",
          types: ["political", "sublocality", "sublocality_level_1"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["locality", "political"],
        },
        {
          long_name: "North 24 Parganas",
          short_name: "North 24 Parganas",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
        {
          long_name: "700156",
          short_name: "700156",
          types: ["postal_code"],
        },
      ],
      formatted_address: "Street No 165, BC Block, Newtown, Action Area I, Newtown, Kolkata, West Bengal 700156, India",
      geometry: {
        location: {
          lat: 22.5815353,
          lng: 88.466984,
        },
        location_type: "GEOMETRIC_CENTER",
        viewport: {
          northeast: {
            lat: 22.5828842802915,
            lng: 88.46833298029151,
          },
          southwest: {
            lat: 22.5801863197085,
            lng: 88.4656350197085,
          },
        },
      },
      place_id: "ChIJLfloVKJ1AjoR5Deuyiuz8iA",
      plus_code: {
        compound_code: "HFJ8+JQ Kolkata, West Bengal, India",
        global_code: "7MJCHFJ8+JQ",
      },
      types: ["establishment", "health", "point_of_interest"],
    },
    {
      address_components: [
        {
          long_name: "Newtown",
          short_name: "Newtown",
          types: ["political", "sublocality", "sublocality_level_1"],
        },
        {
          long_name: "BF Block(Newtown)",
          short_name: "BF Block(Newtown)",
          types: ["neighborhood", "political"],
        },
        {
          long_name: "Action Area I",
          short_name: "AA I",
          types: ["political", "sublocality", "sublocality_level_3"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["locality", "political"],
        },
        {
          long_name: "North 24 Parganas",
          short_name: "North 24 Parganas",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
        {
          long_name: "700156",
          short_name: "700156",
          types: ["postal_code"],
        },
      ],
      formatted_address: "Nabanibesh BF 94, Street 167, BF Block(Newtown), Action Area I, Newtown, Kolkata, West Bengal 700156, India",
      geometry: {
        location: {
          lat: 22.5808939,
          lng: 88.46653789999999,
        },
        location_type: "ROOFTOP",
        viewport: {
          northeast: {
            lat: 22.5822428802915,
            lng: 88.4678868802915,
          },
          southwest: {
            lat: 22.5795449197085,
            lng: 88.4651889197085,
          },
        },
      },
      place_id: "ChIJTUDxiWJ1AjoRoujjyemK-sM",
      plus_code: {
        compound_code: "HFJ8+9J Newtown, Kolkata, West Bengal, India",
        global_code: "7MJCHFJ8+9J",
      },
      types: ["street_address"],
    },
    {
      address_components: [
        {
          long_name: "30",
          short_name: "30",
          types: ["street_number"],
        },
        {
          long_name: "Street Number 165",
          short_name: "Street Number 165",
          types: ["route"],
        },
        {
          long_name: "Action Area I",
          short_name: "AA I",
          types: ["political", "sublocality", "sublocality_level_3"],
        },
        {
          long_name: "Newtown",
          short_name: "Newtown",
          types: ["political", "sublocality", "sublocality_level_1"],
        },
        {
          long_name: "New Town",
          short_name: "New Town",
          types: ["locality", "political"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
        {
          long_name: "700156",
          short_name: "700156",
          types: ["postal_code"],
        },
      ],
      formatted_address: "30, Street Number 165, Action Area I, Newtown, New Town, West Bengal 700156, India",
      geometry: {
        location: {
          lat: 22.5815162,
          lng: 88.466904,
        },
        location_type: "RANGE_INTERPOLATED",
        viewport: {
          northeast: {
            lat: 22.5828651802915,
            lng: 88.46825298029151,
          },
          southwest: {
            lat: 22.5801672197085,
            lng: 88.4655550197085,
          },
        },
      },
      place_id: "ElIzMCwgU3RyZWV0IE51bWJlciAxNjUsIEFjdGlvbiBBcmVhIEksIE5ld3Rvd24sIE5ldyBUb3duLCBXZXN0IEJlbmdhbCA3MDAxNTYsIEluZGlhIhoSGAoUChIJaf2axjt1AjoRsimvcuXLgJEQHg",
      types: ["street_address"],
    },
    {
      address_components: [
        {
          long_name: "30",
          short_name: "30",
          types: ["street_number"],
        },
        {
          long_name: "Street Number 165",
          short_name: "Street Number 165",
          types: ["route"],
        },
        {
          long_name: "Action Area I",
          short_name: "AA I",
          types: ["political", "sublocality", "sublocality_level_3"],
        },
        {
          long_name: "Newtown",
          short_name: "Newtown",
          types: ["political", "sublocality", "sublocality_level_1"],
        },
        {
          long_name: "New Town",
          short_name: "New Town",
          types: ["locality", "political"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
        {
          long_name: "700156",
          short_name: "700156",
          types: ["postal_code"],
        },
      ],
      formatted_address: "30, Street Number 165, Action Area I, Newtown, New Town, West Bengal 700156, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 22.5815162,
            lng: 88.46717749999999,
          },
          southwest: {
            lat: 22.5814684,
            lng: 88.466904,
          },
        },
        location: {
          lat: 22.5814923,
          lng: 88.46704079999999,
        },
        location_type: "GEOMETRIC_CENTER",
        viewport: {
          northeast: {
            lat: 22.5828412802915,
            lng: 88.46838973029151,
          },
          southwest: {
            lat: 22.58014331970849,
            lng: 88.4656917697085,
          },
        },
      },
      place_id: "ChIJaf2axjt1AjoRsimvcuXLgJE",
      types: ["route"],
    },
    {
      address_components: [
        {
          long_name: "BF Block(Newtown)",
          short_name: "BF Block(Newtown)",
          types: ["neighborhood", "political"],
        },
        {
          long_name: "Action Area I",
          short_name: "AA I",
          types: ["political", "sublocality", "sublocality_level_3"],
        },
        {
          long_name: "Newtown",
          short_name: "Newtown",
          types: ["political", "sublocality", "sublocality_level_1"],
        },
        {
          long_name: "New Town",
          short_name: "New Town",
          types: ["locality", "political"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
        {
          long_name: "700156",
          short_name: "700156",
          types: ["postal_code"],
        },
      ],
      formatted_address: "BF Block(Newtown), Action Area I, Newtown, New Town, West Bengal 700156, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 22.5817895,
            lng: 88.4721708,
          },
          southwest: {
            lat: 22.5791742,
            lng: 88.46503609999999,
          },
        },
        location: {
          lat: 22.5802016,
          lng: 88.46854549999999,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 22.5818308302915,
            lng: 88.4721708,
          },
          southwest: {
            lat: 22.5791328697085,
            lng: 88.46503609999999,
          },
        },
      },
      place_id: "ChIJV_8GsTt1AjoRb9YIuK12cOk",
      types: ["neighborhood", "political"],
    },
    {
      address_components: [
        {
          long_name: "Action Area 1B",
          short_name: "AA-1B",
          types: ["political", "sublocality", "sublocality_level_3"],
        },
        {
          long_name: "Newtown",
          short_name: "Newtown",
          types: ["political", "sublocality", "sublocality_level_1"],
        },
        {
          long_name: "New Town",
          short_name: "New Town",
          types: ["locality", "political"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "Action Area 1B, Newtown, New Town, West Bengal, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 22.5871091,
            lng: 88.47358709999999,
          },
          southwest: {
            lat: 22.5791049,
            lng: 88.456571,
          },
        },
        location: {
          lat: 22.584249,
          lng: 88.4633999,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 22.5871091,
            lng: 88.47358709999999,
          },
          southwest: {
            lat: 22.5791049,
            lng: 88.456571,
          },
        },
      },
      place_id: "ChIJ88JjVjl1AjoRrjFZjX3FMLk",
      types: ["political", "sublocality", "sublocality_level_3"],
    },
    {
      address_components: [
        {
          long_name: "700156",
          short_name: "700156",
          types: ["postal_code"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["locality", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "Kolkata, West Bengal 700156, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 22.6103043,
            lng: 88.48955389999999,
          },
          southwest: {
            lat: 22.5639695,
            lng: 88.43744559999999,
          },
        },
        location: {
          lat: 22.5837286,
          lng: 88.46956560000001,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 22.6103043,
            lng: 88.48955389999999,
          },
          southwest: {
            lat: 22.5639695,
            lng: 88.43744559999999,
          },
        },
      },
      place_id: "ChIJQSKQkTx1AjoR-WeBBvuB7jU",
      types: ["postal_code"],
    },
    {
      address_components: [
        {
          long_name: "New Town",
          short_name: "New Town",
          types: ["locality", "political"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "New Town, West Bengal, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 22.6340398,
            lng: 88.52201699999999,
          },
          southwest: {
            lat: 22.5490056,
            lng: 88.442245,
          },
        },
        location: {
          lat: 22.5785868,
          lng: 88.471852,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 22.6340398,
            lng: 88.52201699999999,
          },
          southwest: {
            lat: 22.5490056,
            lng: 88.442245,
          },
        },
      },
      place_id: "ChIJv2O_eUp1AjoRgDkOwOPCvLs",
      types: ["locality", "political"],
    },
    {
      address_components: [
        {
          long_name: "Newtown",
          short_name: "Newtown",
          types: ["political", "sublocality", "sublocality_level_1"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["locality", "political"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "Newtown, Kolkata, West Bengal, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 22.6341169,
            lng: 88.5446149,
          },
          southwest: {
            lat: 22.538195,
            lng: 88.44098699999999,
          },
        },
        location: {
          lat: 22.5753931,
          lng: 88.47979029999999,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 22.6341169,
            lng: 88.5446149,
          },
          southwest: {
            lat: 22.538195,
            lng: 88.44098699999999,
          },
        },
      },
      place_id: "ChIJuaWYAzV1AjoRJTQyRLJl4XU",
      types: ["political", "sublocality", "sublocality_level_1"],
    },
    {
      address_components: [
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["locality", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "Kolkata, West Bengal, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 23.0083628,
            lng: 88.5428696,
          },
          southwest: {
            lat: 22.3436288,
            lng: 88.1165879,
          },
        },
        location: {
          lat: 22.572646,
          lng: 88.36389500000001,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 23.0083628,
            lng: 88.5428696,
          },
          southwest: {
            lat: 22.3436288,
            lng: 88.1165879,
          },
        },
      },
      place_id: "ChIJZ_YISduC-DkRvCxsj-Yw40M",
      types: ["locality", "political"],
    },
    {
      address_components: [
        {
          long_name: "North 24 Parganas",
          short_name: "North 24 Parganas",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "North 24 Parganas, West Bengal, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 23.2437441,
            lng: 89.1004976,
          },
          southwest: {
            lat: 22.12293,
            lng: 88.33068,
          },
        },
        location: {
          lat: 22.6168099,
          lng: 88.402895,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 23.2437441,
            lng: 89.1004976,
          },
          southwest: {
            lat: 22.12293,
            lng: 88.33068,
          },
        },
      },
      place_id: "ChIJv975mQSi-DkRI4iUx-rgj0Q",
      types: ["administrative_area_level_2", "political"],
    },
    {
      address_components: [
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "West Bengal, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 27.220707,
            lng: 89.880039,
          },
          southwest: {
            lat: 21.524921,
            lng: 85.82095799999999,
          },
        },
        location: {
          lat: 22.9867569,
          lng: 87.85497549999999,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 27.220707,
            lng: 89.880039,
          },
          southwest: {
            lat: 21.524921,
            lng: 85.82095799999999,
          },
        },
      },
      place_id: "ChIJh-iXE_8W-jkRCqLnwz06VHE",
      types: ["administrative_area_level_1", "political"],
    },
    {
      address_components: [
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "India",
      geometry: {
        bounds: {
          northeast: {
            lat: 35.513327,
            lng: 97.39535869999999,
          },
          southwest: {
            lat: 6.4626999,
            lng: 68.1097,
          },
        },
        location: {
          lat: 20.593684,
          lng: 78.96288,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 35.513327,
            lng: 97.39535869999999,
          },
          southwest: {
            lat: 6.4626999,
            lng: 68.1097,
          },
        },
      },
      place_id: "ChIJkbeSa_BfYzARphNChaFPjNc",
      types: ["country", "political"],
    },
  ],
  status: "OK",
};

export const p_idList = [
  "ChIJ3Q7rxMZwAjoR2A_3iaL0hqs",
  "ChIJ52y5Pjd3AjoR1qntohTXjFk",
  "ChIJm8hp9lB3AjoRrMuclnWJwss",
  "ChIJSd03gtJ1AjoRC84nsvCYTLI",
  "ChIJ0aox84B2AjoRHzv3qDGE99g",
  "ChIJWwcRw8dwAjoRDOzP_WhWVSU",
  "ChIJceDqwyJxAjoRns3YFOuMwy8",
  "ChIJ33o0YBF3AjoROA1xxtlha8s",
  "ChIJ0QImGsd3AjoRYbuBhlCCEI8",
  "ChIJxUWVizJ1AjoR81UqLvSoVVw",
  "ChIJS4eqzRB3AjoRS-FPQmK2Hrg",
  "ChIJD29QSxx3AjoRoap5sQ8ldKU",
  "ChIJWf7Ukl9xAjoR58iocnMbtCI",
  "ChIJe6yzIVN2AjoRL6KNl1_DAhI",
  "ChIJxbxNhUyc-DkR9M8tvNzQ2vI",
  "ChIJ111USZhxAjoR6erhAs-FiGk",
  "ChIJw7NEKiV3AjoRpBWzlGCdwC8",
  "ChIJ5fB9sP92AjoRv6K-aNQPdKI",
  "ChIJVaWkIRF3AjoRN2AxCYJwPqQ",
  "ChIJ73Uj2nx2AjoRrzbeL0cWSTI",
  "ChIJx6xuall3AjoRV2JWtfV2br8",
  "ChIJb-baoXp2AjoR5MExaA0ubws",
  "ChIJx4UpCv95AjoRafZ34KQjDK0",
  "ChIJWzLUUNh5AjoRQZcJ798Tamw",
  "ChIJ33o0YBF3AjoRsLY3MO4AAcU",
  "ChIJMXKoEOBzAjoRec8B2wUFRSg",
  "ChIJKxBDpixxAjoR-xFiMonJ7a8",
  "ChIJQzdHvCxxAjoRsGK6zfxRg9A",
  "ChIJO5kOKUe99zkRmrowZOMDZbE",
  "ChIJgQjYEGu99zkRXois07RRZN4",
  "ChIJxb9sKP8h-DkRlx0XUCvIU5I",
  "ChIJC_QRM9Zc9zkR0SV5TpQrHvg",
  "ChIJIfXT3vT1-TkR3TWN4BYC7ts",
  "ChIJH7ygxk354jkR-lOkyR_5FAg",
  "ChIJ-5GVMc9G5DkR86N6hST3Le4",
  "ChIJiRVqPCJB5DkRYIKi7B4KUNU",
  "ChIJ28h-C0xE5DkRMX2o3wFb3Gg",
  "ChIJDeQPLiNB5DkR6wUYpg7dERI",
  "ChIJ9ciqsViE-DkRFWtlL81dOks",
  "ChIJy7YSQOqT-DkRSKcLIhg7vCg",
  "ChIJAxa3g3IV-DkRQ6cjXUDaOy8",
  "ChIJqUXOMI2c-DkRY-7yvR6-ri4",
  "ChIJ_WEzcvkT-DkR2PGhT2ICWLo",
  "ChIJE2Rng3CQ-DkReVJanyNu4n0",
  "ChIJTbhCzO6GAjoRRc79vzH56s8",
  "ChIJCXP28sF3AjoRaAREIYKmSy0",
  "ChIJpwdbjYZ4AjoRvPur7XREZ90",
  "ChIJUbuqvn94AjoRFn5-H8sF4ZY",
  "ChIJzQ-GGJuGAjoRff1pRElrP70",
  "ChIJZ_bPRP54AjoRUpV1yBfZz3U",
  "ChIJlyXQtbR5AjoRJD-5OkZ3bk4",
  "ChIJgeNdi2Z55DkRKKQz5xXbpuo",
  "ChIJza1-_WV55DkR-Wxn75PeqHU",
  "ChIJraqqqgtD5DkRQbVAWaVllY4",
  "ChIJgykOZg395DkRrOlsh2bzVzM",
  "ChIJPRs9gQPV-jkR163BgJK5XtI",
  "ChIJy0zmBnQNAjoRdp2KAzPQ1QM",
  "ChIJr4r2AX19AjoR6fsRc27h6Ck",
  "ChIJa2NJXZNwAjoRW2ffWJU-r6Q",
  "ChIJv-_6Oex6AjoRYklQIcAkXb8",
  "ChIJHW5PBTTb-jkRJHkHG7l91tc",
  "ChIJaTIRErHt-jkR1456Zkf1TE4",
  "ChIJ9YXaIsp9-TkRp9OQF8_N2I4",
  "ChIJUZMSu2x--TkRr3g8E68cPr4",
  "ChIJ56iOnFDW-zkRCEgvzsbgoEg",
  "ChIJORSiIeg3-jkRGoehbrGsw1I",
  "ChIJVVVVFRM3-jkR3eWOEyUddug",
  "ChIJT9Ui2vVx-TkRtH_XvRzGyGc",
  "ChIJF5wKQPV99jkRCMwArSWqqlU",
  "ChIJ5f8yb_V99jkR5BzRTmqGi-A",
  "ChIJMepoDiy7AjoROkfHTqZgEgc",
  "ChIJhe68VPsmAzoRl05UKedEh9A",
  "ChIJlwhVAtHpAjoRicqyp-bunnE",
  "ChIJg_XG8WmV-DkRzr325ym35UA",
  "ChIJCR5Cahwg-TkR_ZO4mJ-ID6g",
  "ChIJR3GFotOV-DkRhoARzu8vTDo",
  "ChIJq4UPix82-DkR3YVYDVnexoA",
  "ChIJ9Q5ISOFI-DkR-RgDKqiuGHA",
  "ChIJ8dWRoNVEHToRH7a5-754TNc",
  "ChIJZZDxNJpcHToRk3MoEWkv-DU",
  "ChIJnVTzDxIf9zkRK3i5g21opNY",
  "ChIJ375v2rYf9zkRWmegRyAZkNM",
  "ChIJo0yzpjSc-DkRe0O_O-QKNk0",
  "ChIJ2TOP5T1xAjoR6jJByjpOcmQ",
  "ChIJ8We3zvx1AjoRTGENwxNBPWk",
  "ChIJkYTAvTGe-DkRerCpGDseBMU",
  "ChIJf2Zoich1AjoRoGzepMG78uY",
  "ChIJ-UAfyzN1AjoRHg4swVK7cNY",
  "ChIJfcqX1Rh3AjoR2NEfsBDsOgI",
  "ChIJ4_pR--Gj-DkR6JkJ9Yk-tAo",
  "ChIJP-ES7Aai-DkR-ML-9kF-tXk",
  "ChIJGV2b1lma-DkRIWNchORtk2k",
  "ChIJP9jGfvej-DkRo61GyRr-nzc",
  "ChIJi_QdV851AjoR0i_iwmaqSbU",
  "ChIJ10GfgrE-tokRCFVRW0SXNJg",
];

export const dummyData = {
  plus_code: {
    compound_code: "G94X+27 Kolkata, West Bengal, India",
    global_code: "7MJCG94X+27",
  },
  results: [
    {
      address_components: [
        {
          long_name: "164",
          short_name: "164",
          types: ["premise"],
        },
        {
          long_name: "North Purbachal",
          short_name: "North Purbachal",
          types: ["political", "sublocality", "sublocality_level_2"],
        },
        {
          long_name: "Haltu",
          short_name: "Haltu",
          types: ["political", "sublocality", "sublocality_level_1"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["locality", "political"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
        {
          long_name: "700078",
          short_name: "700078",
          types: ["postal_code"],
        },
      ],
      formatted_address: "164, North Purbachal, Haltu, Kolkata, West Bengal 700078, India",
      geometry: {
        location: {
          lat: 22.5049706,
          lng: 88.398302,
        },
        location_type: "ROOFTOP",
        viewport: {
          northeast: {
            lat: 22.5063195802915,
            lng: 88.39965098029151,
          },
          southwest: {
            lat: 22.5036216197085,
            lng: 88.39695301970849,
          },
        },
      },
      place_id: "ChIJGw3mY1dxAjoRZK3Txut_nxM",
      plus_code: {
        compound_code: "G93X+X8 Haltu, Kolkata, West Bengal, India",
        global_code: "7MJCG93X+X8",
      },
      types: ["street_address"],
    },
    {
      address_components: [
        {
          long_name: "Purbachal Kalitala Road",
          short_name: "Purbachal Kalitala Rd",
          types: ["route"],
        },
        {
          long_name: "North Purbachal",
          short_name: "North Purbachal",
          types: ["political", "sublocality", "sublocality_level_2"],
        },
        {
          long_name: "Haltu",
          short_name: "Haltu",
          types: ["political", "sublocality", "sublocality_level_1"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["locality", "political"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
        {
          long_name: "700078",
          short_name: "700078",
          types: ["postal_code"],
        },
      ],
      formatted_address: "Purbachal Kalitala Rd, North Purbachal, Haltu, Kolkata, West Bengal 700078, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 22.5050206,
            lng: 88.3985624,
          },
          southwest: {
            lat: 22.5045801,
            lng: 88.3984426,
          },
        },
        location: {
          lat: 22.5048004,
          lng: 88.39850249999999,
        },
        location_type: "GEOMETRIC_CENTER",
        viewport: {
          northeast: {
            lat: 22.50614933029151,
            lng: 88.3998514802915,
          },
          southwest: {
            lat: 22.5034513697085,
            lng: 88.39715351970848,
          },
        },
      },
      place_id: "ChIJ1ZTDYldxAjoRTEKQgx0Tkg8",
      types: ["route"],
    },
    {
      address_components: [
        {
          long_name: "North Purbachal",
          short_name: "North Purbachal",
          types: ["political", "sublocality", "sublocality_level_2"],
        },
        {
          long_name: "Haltu",
          short_name: "Haltu",
          types: ["political", "sublocality", "sublocality_level_1"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["locality", "political"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
        {
          long_name: "700078",
          short_name: "700078",
          types: ["postal_code"],
        },
      ],
      formatted_address: "North Purbachal, Haltu, Kolkata, West Bengal 700078, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 22.5096639,
            lng: 88.40142299999999,
          },
          southwest: {
            lat: 22.5036947,
            lng: 88.39349109999999,
          },
        },
        location: {
          lat: 22.506157,
          lng: 88.39796629999999,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 22.5096639,
            lng: 88.40142299999999,
          },
          southwest: {
            lat: 22.5036947,
            lng: 88.39349109999999,
          },
        },
      },
      place_id: "ChIJB8RoqFFxAjoRajxfdhcXbvk",
      types: ["political", "sublocality", "sublocality_level_2"],
    },
    {
      address_components: [
        {
          long_name: "700078",
          short_name: "700078",
          types: ["postal_code"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["locality", "political"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "Kolkata, West Bengal 700078, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 22.516262,
            lng: 88.40159829999999,
          },
          southwest: {
            lat: 22.4990563,
            lng: 88.37711329999999,
          },
        },
        location: {
          lat: 22.5074344,
          lng: 88.3872835,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 22.516262,
            lng: 88.40159829999999,
          },
          southwest: {
            lat: 22.4990563,
            lng: 88.37711329999999,
          },
        },
      },
      place_id: "ChIJR9bwAE9xAjoRQzzzqQMLkNE",
      types: ["postal_code"],
    },
    {
      address_components: [
        {
          long_name: "Haltu",
          short_name: "Haltu",
          types: ["political", "sublocality", "sublocality_level_1"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["locality", "political"],
        },
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "Haltu, Kolkata, West Bengal, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 22.5117692,
            lng: 88.40142299999999,
          },
          southwest: {
            lat: 22.495561,
            lng: 88.3770394,
          },
        },
        location: {
          lat: 22.5048386,
          lng: 88.388459,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 22.5117692,
            lng: 88.40142299999999,
          },
          southwest: {
            lat: 22.495561,
            lng: 88.3770394,
          },
        },
      },
      place_id: "ChIJkzUK5UhxAjoRsV6K-TDTuH8",
      types: ["political", "sublocality", "sublocality_level_1"],
    },
    {
      address_components: [
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["administrative_area_level_2", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "Kolkata, West Bengal, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 22.6312601,
            lng: 88.45716999999999,
          },
          southwest: {
            lat: 22.45139,
            lng: 88.23506990000001,
          },
        },
        location: {
          lat: 22.5402602,
          lng: 88.38219889999999,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 22.6312601,
            lng: 88.45716999999999,
          },
          southwest: {
            lat: 22.45139,
            lng: 88.23506990000001,
          },
        },
      },
      place_id: "ChIJyxufaAB3AjoRzhRx7JWHIFw",
      types: ["administrative_area_level_2", "political"],
    },
    {
      address_components: [
        {
          long_name: "Kolkata",
          short_name: "Kolkata",
          types: ["locality", "political"],
        },
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "Kolkata, West Bengal, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 23.0083628,
            lng: 88.5428696,
          },
          southwest: {
            lat: 22.3436288,
            lng: 88.1165879,
          },
        },
        location: {
          lat: 22.572646,
          lng: 88.36389500000001,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 23.0083628,
            lng: 88.5428696,
          },
          southwest: {
            lat: 22.3436288,
            lng: 88.1165879,
          },
        },
      },
      place_id: "ChIJZ_YISduC-DkRvCxsj-Yw40M",
      types: ["locality", "political"],
    },
    {
      address_components: [
        {
          long_name: "West Bengal",
          short_name: "WB",
          types: ["administrative_area_level_1", "political"],
        },
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "West Bengal, India",
      geometry: {
        bounds: {
          northeast: {
            lat: 27.220707,
            lng: 89.880039,
          },
          southwest: {
            lat: 21.524921,
            lng: 85.82095799999999,
          },
        },
        location: {
          lat: 22.9867569,
          lng: 87.85497549999999,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 27.220707,
            lng: 89.880039,
          },
          southwest: {
            lat: 21.524921,
            lng: 85.82095799999999,
          },
        },
      },
      place_id: "ChIJh-iXE_8W-jkRCqLnwz06VHE",
      types: ["administrative_area_level_1", "political"],
    },
    {
      address_components: [
        {
          long_name: "India",
          short_name: "IN",
          types: ["country", "political"],
        },
      ],
      formatted_address: "India",
      geometry: {
        bounds: {
          northeast: {
            lat: 35.513327,
            lng: 97.39535869999999,
          },
          southwest: {
            lat: 6.4626999,
            lng: 68.1097,
          },
        },
        location: {
          lat: 20.593684,
          lng: 78.96288,
        },
        location_type: "APPROXIMATE",
        viewport: {
          northeast: {
            lat: 35.513327,
            lng: 97.39535869999999,
          },
          southwest: {
            lat: 6.4626999,
            lng: 68.1097,
          },
        },
      },
      place_id: "ChIJkbeSa_BfYzARphNChaFPjNc",
      types: ["country", "political"],
    },
  ],
  status: "OK",
};

export const CommunicatorFetch = (urlName, params) => {
  console.log("Communication fetched==" + urlName);
  let url;
  if (params != "") {
    url = urlName + params + apiKey;
  } else {
    url = urlName;
  }
  //return fetch(proxyurl + url).then((response) => dummyData);
  return fetch(proxyurl + url).then((response) => response.json());
};
