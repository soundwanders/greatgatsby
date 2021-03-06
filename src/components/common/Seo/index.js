import React from 'react';
import Helmet from 'react-helmet';
import {
  url,
  defaultDescription,
  defaultTitle,
  socialLinks,
  address,
  contact,
  legalName,
  creationDate,
  logo,
} from 'data/config';

export const Seo = ({
  title = defaultTitle,
  description = defaultDescription,
  location = '',
}) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}"
		"logo": "${logo}",
		"creationDate": "${creationDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"contactType": "e-mail soundwanders"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressRegion": "${address.state}",
			"addressCountry": "${address.country}",
		},
		"sameAs": [
			"${socialLinks.linkedin}",
			"${socialLinks.github}"
		]
  	}`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta
        name="image"
        content="https://res.cloudinary.com/cloudwanders/image/upload/v1635020321/thumbnail.png"
      />
      <meta
        name="viewport"
        content="width=width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <meta property="og:url" content={`${url}${location}/?ref=jcoletta.com`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/cloudwanders/image/upload/v1635020321/thumbnail.png"
      />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
};
