export const routes = {
  home: () => "/",
  courses: () => "/courses",
  courseDetail: (id: string) => `/courses/${id}`,
  about: () => "/about",
  contact: () => "/contact",
  auth: () => "/auth"
};