import React from 'react';
import { Container } from 'components/common';
import { Footer, Flex, Links } from './footerStyle';
import socials from './socials.json';


export const Footer = () => (
    <Footer>
        <Flex as={Container}>
            <span>
                © All rights reserved | soundwanders {new Date().getFullYear()}
                {` `};
            </span>

            <Links>
                { socials.map(({ id, name, link, icon }) => (
                    <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`Check out my ${name}`}>
                        <img width="24" src={icon} alt={name} />
                    </a>
                ))};
            </Links>
        </Flex>
    </Footer>
);
