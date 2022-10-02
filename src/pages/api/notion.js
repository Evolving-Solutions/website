// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async (req, res) => {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.request({
        path: 'databases/' + databaseId + '/query',
        method: 'POST',
    });
    

    const leads = response.results.map((page) => {
        console.log(page.properties.first_name.rich_text[0].text.content)
        // return {
        //     id: page.id,
        //     first_name: page.properties.first_name.title[0].plain_text,
        //     last_name: page.properties.last_name.title[0].plain_text,
        //     email: page.properties.email.email,
        //     phone: page.properties.phone.phone_number,
        // };
    });

    res.status(200).json(response);
}



