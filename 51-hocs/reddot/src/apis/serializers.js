export function userSerializer(user) {
  return { username: user.username, id: user.id, avatar: user.avatar };
}
