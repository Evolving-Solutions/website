// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async (req, res) => {

    const { firstName, lastName, email, phoneNumber } = req.body;


    const pageId = process.env.NOTION_PAGE_ID;
    const response = await notion.pages.create({
        parent: {
            database_id: process.env.NOTION_DATABASE_ID,
        },
        properties: {
            title: {
                title: [
                    {
                        text: {
                            content: `${firstName} ${lastName}`,
                        },
                    },
                ],

            },
            first_name: {
                rich_text: [
                    {
                        text: {
                            content: firstName,

                        }
                    }
                ]
            },
            last_name: {
                rich_text: [
                    {
                        text: {
                            content: lastName,
                        }
                    }
                ]
            },
            email: {
                email: email,
            },
            phone: {
                phone_number: phoneNumber,
            }


        },
    });
    console.log(response)

    res.status(200).json(response);
}