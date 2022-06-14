const env = process.env.NEXT_PUBLIC_DEPLOYMENT_ENVIRONMENT;
const DOMAIN_PRODUCTION = 'logout-issue.amie.so';
const DOMAIN_PREVIEW = 'fishbowl.amie.so';

export function getDomainForEnvironment() {
  switch (env) {
    case 'production':
      return DOMAIN_PRODUCTION;
    case 'preview':
      return DOMAIN_PREVIEW;
    default:
      return;
  }
}

export function getBaseURLForEnvironment() {
  switch (env) {
    case 'production':
      return `https://${DOMAIN_PRODUCTION}`;
    case 'preview':
      return `https://${DOMAIN_PREVIEW}`;

    default:
      return 'http://localhost:3000';
  }
}

export function getIsSecureCookieURL() {
  switch (env) {
    case 'production':
      return true;
    case 'preview':
      return true;
    default:
      return false;
  }
}

export function isValidUrl(str: string): boolean {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  );
  return !!pattern.test(str);
}
