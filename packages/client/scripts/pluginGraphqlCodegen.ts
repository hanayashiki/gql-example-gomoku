import type { Plugin } from 'vite';
import { generate, loadContext } from '@graphql-codegen/cli';

export const pluginGraphqlCodegen = (): Plugin => {
  const runCodegen = async () => {
    const config = await loadContext();
    await generate(config);
  };

  return {
    name: 'plugin-graphql-codegen',
    buildStart: async () => {
      await runCodegen();
    },
    configureServer: async () => {
      const config = await loadContext();
      config.updateConfig({
        watch: true,
      })

      generate(config)
        .catch(console.error);
    },
  };
};
