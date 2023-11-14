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

// type getUserProps = {
//   page?: number,
//   limit?: number
// }

export async function getusers(): Promise<IUser[] | undefined> {
  try {
    const request = await Api.get('users')
    console.log(request.data)
    return request.data
  } catch (error) {
    console.error('Erro ao buscar usuários', error);
  }
}