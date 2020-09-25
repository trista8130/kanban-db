import Forms from "../models/Forms";

const fetchForms = () => {
  return Forms.find();
};

const createForm = (data) => {
  const { title, color, formIndex } = data;
  if (!title || !color || !formIndex) {
    throw "some info is missing";
  }
  return Forms.create({
    title,
    color,
    formIndex,
  });
};

const createCardContent = (data) => {
  const { formId, text } = data;
  if (!text) {
    throw "text is missing";
  }
  if (!formId) {
    throw "formId is missing";
  }
  return Forms.findByIdAndUpdate(
    formId,
    {
      $push: {
        cards: { text: text },
      },
    },
    { new: true }
  );
};

const removeForm = (data) => {
  const { formId } = data;
  return Forms.findByIdAndDelete(formId);
};

const removeCard = async (data) => {
  const { removeFormId, cardIndex } = data;
  await Forms.findByIdAndUpdate(removeFormId, {
    $unset: { [`cards.${cardIndex}`]: 1 },
  });
  return Forms.findByIdAndUpdate(
    removeFormId,
    { $pull: { cards: { $in: [null] } } },
    { new: true }
  );
};

const FormsController = {
  fetchForms,
  createForm,
  createCardContent,
  removeForm,
  removeCard,
};

export default FormsController;
