type College = {
  collegeId: string;
  name: string;
  programs: string[];
};

export type Campus = {
  campusId: string;
  name: string;
  colleges: College[];
};
