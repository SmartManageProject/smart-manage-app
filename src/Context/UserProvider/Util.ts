import { Api } from "../../service/api";
import { IUser, Project } from "./types";

type getUserDataProps = {
  userId: string, 
}

export async function getUserData({userId}: getUserDataProps) {
  try {
    const request =  await Api.get(`users/${userId}`)
    return request.data
  } catch (error) {
    return error
  }
}

export async function getProjects(): Promise<Project[] | undefined>  {
  try {
    const request = await Api.get('projects')
    console.log(request.data)
    return request.data
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
  }
}

type getUserProps = {
  page: number,
  limit: number,
  search?: string | null
}

export async function getusers({page, limit, search}:getUserProps): Promise<IUser[] | undefined> {
  if(search){
    try {
      const request = await Api.get(`users?search=${search}&limit=${limit}`)
      return request.data
    } catch (error) {
      console.error('Erro ao buscar usuários', error);
    }
  }
  try {
    const request = await Api.get(`users?page=${page}&limit=${limit}`)
    return request.data
  } catch (error) {
    console.error('Erro ao buscar usuários', error);
  }
}

type createProjectProps = {
  name: string; 
  description: string;
  membersId: string[];
}

export async function createProject({name, description, membersId}: createProjectProps) {
  try {
    const request = await Api.post("projects", {name, description, membersId})
    return request.data;
  }catch (error) {
    console.error('Erro ao criar o projeto', error);
  }
}
