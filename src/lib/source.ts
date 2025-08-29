import { docs } from '../../.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/moemoe/docs',
  source: docs.toFumadocsSource(),
});
