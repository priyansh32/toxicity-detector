"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

const toxicity = require("@tensorflow-models/toxicity");

export default function Main() {
  const [result, setResult] = useState([
    { label: "Identity attack", probability: 0, match: false },
    { label: "Insult", probability: 0, match: false },
    { label: "Obscene", probability: 0, match: false },
    { label: "Severe Toxicity", probability: 0, match: false },
    { label: "Sexual Explicit", probability: 0, match: false },
    { label: "Threat", probability: 0, match: false },
    { label: "Toxicity", probability: 0, match: false },
  ]);
  const [loading, setLoading] = useState(false);
  const [modelLoaded, setmodelLoaded] = useState(false);
  const [model, setModel] = useState(null);

  useEffect(() => {
    toxicity
      .load(0.7)
      .then((m) => setModel(m))
      .then(() => setmodelLoaded(true));
  }, []);

  function runModel(sentences) {
    let result_array = result;
    model.classify(sentences).then((predictions) => {
      console.log(predictions);
      for (let i = 0; i < predictions.length; i++) {
        result_array[i].probability = (
          predictions[i].results[0].probabilities[1] * 100
        ).toFixed(2);
        result_array[i].match = predictions[i].results[0].match;
      }
      setLoading(false);
      setResult((items) => items.map((item, index) => result_array[index]));
      return;
    });
  }
  return (
    <>
      {!modelLoaded ? (
        <LoadingScreen />
      ) : (
        <>
          <div className='flex justify-center max-w-3xl mx-auto py-6 sm:px-6 lg:px-8'>
            <div className='bg-white overflow-hidden shadow rounded-lg w-11/12 max-w-lg'>
              <div className='px-4 py-5 sm:p-6'>
                <h1 className='flex-shrink-0 py-4 font-bold'>
                  Toxicity Detector - TensorflowJS
                </h1>
                <div className='min-w-0 flex-1'>
                  <form action='#'>
                    <div className='border-b border-gray-300 focus-within:border-indigo-600'>
                      <label htmlFor='comment' className='sr-only'>
                        Text here...
                      </label>
                      <textarea
                        rows={3}
                        name='comment'
                        id='comment'
                        className='block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 focus:border-indigo-600 sm:text-sm'
                        placeholder='Add your text...'
                        defaultValue={""}
                      />
                    </div>
                    <div className='pt-2 flex justify-end'>
                      <div className='flex-shrink-0'>
                        <button
                          type='submit'
                          className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          onClick={(e) => {
                            e.preventDefault();
                            setLoading(true);
                            runModel([
                              document.getElementById("comment").value,
                            ]);
                          }}
                        >
                          {loading ? (
                            <>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
                                />
                              </svg>
                              Calculating
                            </>
                          ) : (
                            <>Check Toxicity</>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Result
            </h3>
            <dl className='mt-5 grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7'>
              {result.map((item) => (
                <div
                  key={item.label}
                  className={`px-4 py-5 shadow rounded-lg overflow-hidden sm:p-6 ${
                    item.match ? "bg-red-400" : "bg-green-400"
                  }`}
                >
                  <dt className='text-sm font-medium text-gray-900 truncate'>
                    {item.label}
                  </dt>
                  <dd className='mt-1 text-2xl font-medium text-gray-900'>
                    {`${item.probability}%`}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </>
      )}
    </>
  );
}
