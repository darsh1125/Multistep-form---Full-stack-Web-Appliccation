import db from "../models";

export const removeData = async (id: number) => {

  const result = await db.User.destroy({
    where: {
      id: id
    }
  });
  const getEduInfo = await db.schDetail.findAll({
    where: {
      userId: id
    }
  });

  if (getEduInfo.length !== 0) {
    getEduInfo.map(async (ele: { id: number }) => {
      await db.schDetail.destroy({
        where: {
          userId: id,
          id: ele.id
        }
      })
    });
  }

  const workInfoDetails = await db.workExperience.findAll({
    where: {
      userId: id
    }
  });

  if (workInfoDetails.length !== 0) {
    workInfoDetails.map(async (ele: { id: number }) => {
      await db.workExperience.destroy({
        where: {
          userId: id,
          id: ele.id
        }
      })
    });
  }

  const languageDetails = await db.language.findAll({
    where: {
      userId: id
    }
  });

  if (languageDetails.length !== 0) {
    languageDetails.map(async (ele: { id: number }) => {
      await db.language.destroy({
        where: {
          userId: id,
          id: ele.id
        }
      })
    });
  }

  const techDetails = await db.technology.findAll({
    where: {
      userId: id
    }
  });

  if (techDetails.length !== 0) {
    techDetails.map(async (ele: { id: number }) => {
      await db.technology.destroy({
        where: {
          userId: id,
          id: ele.id
        }
      })
    });
  }

  const refInfo = await db.referenceContact.findAll({
    where: {
      userId: id
    }
  });

  if (refInfo.length !== 0) {
    refInfo.map(async (ele: { id: number }) => {
      await db.referenceContact.destroy({
        where: {
          userId: id,
          id: ele.id
        }
      })
    })
  }

  const removePreferenceDetails = await db.preference.destroy({
    where: {
      userId: id
    }
  });

}