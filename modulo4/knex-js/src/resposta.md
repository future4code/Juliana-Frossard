EXERCICIOS 

1-
a) O raw permite para o banco de dados usando SQL
b)const search = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}
c)const quantity = async (gender:string) => {
    const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}";`)
    return result;
}   
2-
a)app.put("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    const actorSalary = req.body.salary
    const iD = req.params.id
    try {
         await connection("Actor")
            .update({
                salary: actorSalary
            })
            .where({ id: iD });

        res.status(200).send({ message: "Ator atualizado" });
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});

// * 
const updateSalary = async (id: string, salary: number): Promise<any> => {
    const result = await connection.raw(`
    UPDATE Actor SET salary = ${salary} 
    WHERE id=${id};`)
    return result;
}
b)app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    const iD = req.params.id
    try {
      await connection("Actor")
      .delete()
      .where({ id: iD });
        
      res.status(200).send({ message: "ator deletado" });
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });

// * 
  const deleteActor = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    DELETE FROM Actor WHERE id=${id};`)
    return result;
}
c) app.get('/actor/salary/:gender', async (req: Request, res: Response): Promise<any> => {
    const gender = req.params.gender
    try {
        await connection("Actor")
    .avg(????????)
    .where({gender: gender})

    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

const avrSalaryGender =async (gender:string): Promise<any> => {
    const result = await connection.raw(`
    SELECT AVG(salary) 
    FROM Actor WHERE gender = ${gender};
`)
return result;
}


3-
