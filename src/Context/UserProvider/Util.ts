import { Api } from "../../service/api";
import { ListUsersResponse } from "../../types/AppTypes";
import { Project } from "./types";

type getUserDataProps = {
  userId: string;
};

export async function getUserData({ userId }: getUserDataProps) {
  try {
    const request = await Api.get(`users/${userId}`);
    return request.data;
  } catch (error) {
    return error;
  }
}

export async function getProjects(): Promise<Project[] | undefined> {
  try {
    const request = await Api.get("projects");
    return request.data;
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
  }
}

type getUserProps = {
  page: number;
  limit: number;
  search?: string | null;
};

export async function getusers({
  page,
  limit,
  search,
}: getUserProps): Promise<ListUsersResponse | undefined> {
  if (search) {
    try {
      const request = await Api.get(`users?search=${search}&limit=${limit}`);
      return request.data;
    } catch (error) {
      console.error("Erro ao buscar usuários", error);
    }
  }
  try {
    const request = await Api.get(`users?page=${page}&limit=${limit}`);
    return request.data;
  } catch (error) {
    console.error("Erro ao buscar usuários", error);
  }
}

type createProjectProps = {
  name: string;
  description: string;
  membersId: string[];
};

export async function createProject({
  name,
  description,
  membersId,
}: createProjectProps) {
  return await Api.post("projects", {
    name,
    description,
    membersId,
  })
    .then((res) => ({ data: { ...res.data }, status: res.status }))
    .catch((err) => err.response.data);
}
