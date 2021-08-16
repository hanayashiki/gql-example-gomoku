import { enumType, objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
    t.nullable.field('gender', {
      type: enumType({
        name: 'Gender',
        members: ['MALE', 'FEMALE'],
      })
    });
    t.nonNull.string('createdAt', {
      resolve: (r) => r.createdAt.toISOString(),
    });
    t.nonNull.string('updatedAt', {
      resolve: (r) => r.updatedAt.toISOString(),
    });
  },
});
