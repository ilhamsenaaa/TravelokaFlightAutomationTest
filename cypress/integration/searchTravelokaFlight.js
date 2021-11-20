
describe('Traveloka Flight', function() {


    it('Search Traveloka flight from jakarta to padang should success', function() {
        //visit traveloka website
        cy.visit('https://www.traveloka.com/');

        //click transportasi to show dropdown
        cy.get('#__next > div.css-1dbjc4n.r-1awozwy.r-kdyh1x.r-1yos0t3.r-1jgb5lz.r-r0h9e2.r-bztko3.r-1xcajam.r-ipm5af.r-13qz1uu.r-1s3egr7 > div.css-1dbjc4n.r-1awozwy.r-13qz1uu > div > div:nth-child(1) > div:nth-child(1) > div > img')
        .click();

        //click tiket pesawat
        cy.get('#__next > div.css-1dbjc4n.r-1awozwy.r-kdyh1x.r-1yos0t3.r-1jgb5lz.r-r0h9e2.r-bztko3.r-1xcajam.r-ipm5af.r-13qz1uu.r-1s3egr7 > div.css-1dbjc4n.r-1awozwy.r-13qz1uu > div > div:nth-child(1) > div.css-1dbjc4n.r-18u37iz.r-1d2f490.r-q3we1.r-105ug2t.r-u8s1d.r-j76wpu > div > div > div > a:nth-child(1) > div')
        .click();

        //click kota tujuan field and type pdg
        cy.get('[aria-activedescendant="destination-airport-0"]').click().type('pdg');

        //click kota tujuan field and type pdg
        cy.get('#destination-airport-1[aria-label="Padang, Indonesia, Airport Code: P D G"]').click();

        //click cari tiket button
        cy.get('#__next > div._-0U8_ > div._1QNSy > div > div.mMmI2._2vjgs > div._1uz2h > div > div > div:nth-child(2) > div.IwltO > button').click();

        //assert after click tiket button, the url should contain jkta.pdg
        cy.url().should('contain', 'JKTA.PDG');

    }); 
}); 